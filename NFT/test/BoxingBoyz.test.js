const { expect } = require("chai");
const { expectRevert } = require("@openzeppelin/test-helpers");
const BoxingBoyzToken = artifacts.require("BoxingBoyz");

require("chai").should();

let price = web3.utils.toBN(web3.utils.toWei("0.1", "ether"));

contract("BoxingBoyz", ([deployer, owner1, buyer]) => {
  let contract;
  let addressList = [
    "0xbd836d554f431616b444a36673a4c4e05fca2110",
    "0x423a694fe08c3f070f761cc5b4d2a8731ebd8d56",
    "0xeb186ef4dc1a29730beb5ba49bf129c3ef59d356",
  ];
  before(async () => {
    contract = await BoxingBoyzToken.new(
      "ipfs://QmWELZ8xVqguUDvWWeEuZxYwQ1WLgwEz3JLetsANMkXdsg/",
      6
    );
  });

  describe("Deployed BoxingBoyz Contract", async () => {
    it("has an owner", async () => {
      let owner = await contract.owner();
      expect(owner).to.equal(deployer);
    });

    it("has a token name", async () => {
      let name = await contract.name();
      expect(name).to.equal("BoxingBoyz");
    });

    it("has a token symbol", async () => {
      let symbol = await contract.symbol();
      expect(symbol).to.equal("BOXINGBOYZ");
    });
  });

  describe("Minting one BoxingBoyz", async () => {
    let shareHolder1BalanceBefore;
    let shareHolder2BalanceBefore;
    let shareHolder3BalanceBefore;
    let buyerBalanceBefore;

    before(async () => {
      shareHolder1BalanceBefore = await web3.eth.getBalance(addressList[0]);
      shareHolder1BalanceBefore = web3.utils.toBN(shareHolder1BalanceBefore);

      shareHolder2BalanceBefore = await web3.eth.getBalance(addressList[1]);
      shareHolder2BalanceBefore = web3.utils.toBN(shareHolder2BalanceBefore);

      shareHolder3BalanceBefore = await web3.eth.getBalance(addressList[2]);
      shareHolder3BalanceBefore = web3.utils.toBN(shareHolder3BalanceBefore);

      buyerBalanceBefore = await web3.eth.getBalance(buyer);
      buyerBalanceBefore = web3.utils.toBN(buyerBalanceBefore);
    });

    let reciept;
    let transaction;

    it("creates a token", async () => {
      reciept = await contract.mintBB(1, { from: buyer, value: price });
      transaction = await web3.eth.getTransaction(reciept.tx);
    });

    it("has correct tokenURI", async () => {
      let tokenURI = await contract.tokenURI(0);
      expect(tokenURI).to.equal(
        "ipfs://QmWELZ8xVqguUDvWWeEuZxYwQ1WLgwEz3JLetsANMkXdsg/1.json"
      );
    });

    it("transfers ownership to the caller", async () => {
      let owner = await contract.ownerOf(0);
      expect(owner).to.equal(buyer);
    });

    it("token appears in wallet of owner", async () => {
      let wallet = await contract.walletOfOwner(buyer);
      expect(wallet).to.eql([web3.utils.toBN(0)]);
    });

    it("costs X amount ether plus gas to mint", async () => {
      let buyerBalanceAfter = await web3.eth.getBalance(buyer);
      buyerBalanceAfter = web3.utils.toBN(buyerBalanceAfter);
      let gasCost = web3.utils.toBN(
        transaction.gasPrice * reciept.receipt.gasUsed
      );
      let expectedBuyerBalance = buyerBalanceBefore.sub(price).sub(gasCost);
      expect(buyerBalanceAfter.toString()).to.equal(
        expectedBuyerBalance.toString()
      );
    });

    it("revenue is split between owners", async () => {
      let shareHolder1BalanceAfter = await web3.eth.getBalance(addressList[0]);
      shareHolder1BalanceAfter = web3.utils.toBN(shareHolder1BalanceAfter);
      let shareHolder2BalanceAfter = await web3.eth.getBalance(addressList[1]);
      shareHolder2BalanceAfter = web3.utils.toBN(shareHolder2BalanceAfter);
      let shareHolder3BalanceAfter = await web3.eth.getBalance(addressList[2]);
      shareHolder3BalanceAfter = web3.utils.toBN(shareHolder3BalanceAfter);

      let halfOfReveneue = web3.utils.toBN(price / 3);
      let expectedshareHolder1Balance =
        shareHolder1BalanceBefore.add(halfOfReveneue);
      let expectedshareHolder2Balance =
        shareHolder2BalanceBefore.add(halfOfReveneue);
      let expectedshareHolder3Balance =
        shareHolder3BalanceBefore.add(halfOfReveneue);

      expect(Math.round(shareHolder1BalanceAfter / 100).toString()).to.equal(
        Math.round(expectedshareHolder1Balance / 100).toString()
      );
      expect(Math.round(shareHolder2BalanceAfter / 100).toString()).to.equal(
        Math.round(expectedshareHolder2Balance / 100).toString()
      );
      expect(Math.round(shareHolder3BalanceAfter / 100).toString()).to.equal(
        Math.round(expectedshareHolder3Balance / 100).toString()
      );
    });

    describe("Minting two BoxingBoyz", async () => {
      let shareHolder1BalanceBefore;
      let shareHolder2BalanceBefore;
      let shareHolder3BalanceBefore;
      let buyerBalanceBefore;

      before(async () => {
        shareHolder1BalanceBefore = await web3.eth.getBalance(addressList[0]);
        shareHolder1BalanceBefore = web3.utils.toBN(shareHolder1BalanceBefore);

        shareHolder2BalanceBefore = await web3.eth.getBalance(addressList[1]);
        shareHolder2BalanceBefore = web3.utils.toBN(shareHolder2BalanceBefore);

        shareHolder3BalanceBefore = await web3.eth.getBalance(addressList[2]);
        shareHolder3BalanceBefore = web3.utils.toBN(shareHolder3BalanceBefore);

        buyerBalanceBefore = await web3.eth.getBalance(buyer);
        buyerBalanceBefore = web3.utils.toBN(buyerBalanceBefore);
      });

      let reciept;
      let transaction;

      it("creates two token", async () => {
        reciept = await contract.mintBB(2, {
          from: buyer,
          value: price.add(price),
        });
        transaction = await web3.eth.getTransaction(reciept.tx);
      });

      it("token appear in wallet of owner", async () => {
        let wallet = await contract.walletOfOwner(buyer);
        expect(wallet).to.eql([
          web3.utils.toBN(0),
          web3.utils.toBN(1),
          web3.utils.toBN(2),
        ]);
      });

      it("costs 2X ether plus gas to mint", async () => {
        let buyerBalanceAfter = await web3.eth.getBalance(buyer);
        buyerBalanceAfter = web3.utils.toBN(buyerBalanceAfter);
        let gasCost = web3.utils.toBN(
          transaction.gasPrice * reciept.receipt.gasUsed
        );
        let expectedBuyerBalance = buyerBalanceBefore
          .sub(price.add(price))
          .sub(gasCost);
        expect(buyerBalanceAfter.toString()).to.equal(
          expectedBuyerBalance.toString()
        );
      });
    });
  });

  describe("Trying to mint a BoxingBoyz without paying", async () => {
    it("fails", async () => {
      await expectRevert(contract.mintBB(1), "Value below price");
    });
  });

  describe("Trying to mint more than 5 BoxingBoyz", async () => {
    it("fails", async () => {
      await expectRevert(contract.mintBB(6), "Exceeds 5");
    });
  });

  describe("Trying to mint 0 BoxingBoyz", async () => {
    it("fails", async () => {
      await expectRevert(contract.mintBB(0), "You can't mint 0 BoxingBoyz");
    });
  });

  describe("Trying to mint more token than are available", async () => {
    let value = web3.utils.toBN(web3.utils.toWei("0.4", "ether"));

    it("fails", async () => {
      await expectRevert(
        contract.mintBB(4, { from: buyer, value: value }),
        "Not enough token left"
      );
    });
  });

  describe("Trying to mint token after sale", async () => {
    before(async () => {
      await contract.mintBB(1, { from: buyer, value: price });
      await contract.mintBB(1, { from: buyer, value: price });
      await contract.mintBB(1, { from: buyer, value: price });
    });

    it("fails", async () => {
      await expectRevert(
        contract.mintBB(1, { from: buyer, value: price }),
        "Sale has ended"
      );
    });
  });
});

/*contract("Reveal BoxingBoyz", ([deployer, owner1, owner2, buyer]) => {
    let contract
    before(async () => {
        contract = await HODLHeads.new("https://someuri.eth/", owner1, owner2, 5, false)
        await contract.mintHeads(1, { from: buyer, value: price })
    })

    describe("Trying to reveal the contract withpout being the owner", async() => {
        it("fails", async () => {
            await expectRevert(
                contract.reveal("https://some-new-uri.eth/", {from: buyer}),
                "Ownable: caller is not the owner."
            )
        })
    })

    describe("Revealed HODLHeads Contract", async () => {
        before(async () => {
            await contract.reveal("https://some-new-uri.eth/")
        })

        it("is revealed", async () => {
            let reveled = await contract.revealed()
            expect(reveled).to.equal(true)
        })

        it("returns the new tokenURI after reveal", async () => {
            let tokenURI = await contract.tokenURI(0)
            expect(tokenURI).to.equal("https://some-new-uri.eth/0")
        })
    })

    describe("Trying to mint token after reveal", async () => {
        it("fails", async () => {
            await expectRevert(
                contract.mintHeads(1, { from: buyer, value: price }),
                "You can't do this after the reveal"
            )
        })
    })

    describe("Trying to reveal token after reveal", async () => {
        it("fails", async () => {
            await expectRevert(
                contract.reveal("https://some-new-new-uri.eth/"),
                "You can't do this after the reveal"
            )
        })
    })

    describe("Trying to unreveal token after reveal", async () => {
        it("fails", async () => {
            await expectRevert(
                contract.unreveal(),
                "You can do this only in debug mode"
            )
        })
    })
})*/
