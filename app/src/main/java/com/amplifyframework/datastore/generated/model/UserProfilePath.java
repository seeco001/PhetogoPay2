package com.amplifyframework.datastore.generated.model;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.amplifyframework.core.model.ModelPath;
import com.amplifyframework.core.model.PropertyPath;

/** This is an auto generated class representing the ModelPath for the UserProfile type in your schema. */
public final class UserProfilePath extends ModelPath<UserProfile> {
  private CreditTransactionPath creditTransaction;
  private CreditAccountInfoPath activeCreditAccountInfo;
  private WalletTransactionPath walletTransaction;
  private WalletAccountInfoPath activeWalletAccountInfo;
  UserProfilePath(@NonNull String name, @NonNull Boolean isCollection, @Nullable PropertyPath parent) {
    super(name, isCollection, parent, UserProfile.class);
  }
  
  public synchronized CreditTransactionPath getCreditTransaction() {
    if (creditTransaction == null) {
      creditTransaction = new CreditTransactionPath("creditTransaction", true, this);
    }
    return creditTransaction;
  }
  
  public synchronized CreditAccountInfoPath getActiveCreditAccountInfo() {
    if (activeCreditAccountInfo == null) {
      activeCreditAccountInfo = new CreditAccountInfoPath("activeCreditAccountInfo", false, this);
    }
    return activeCreditAccountInfo;
  }
  
  public synchronized WalletTransactionPath getWalletTransaction() {
    if (walletTransaction == null) {
      walletTransaction = new WalletTransactionPath("walletTransaction", true, this);
    }
    return walletTransaction;
  }
  
  public synchronized WalletAccountInfoPath getActiveWalletAccountInfo() {
    if (activeWalletAccountInfo == null) {
      activeWalletAccountInfo = new WalletAccountInfoPath("activeWalletAccountInfo", false, this);
    }
    return activeWalletAccountInfo;
  }
}
